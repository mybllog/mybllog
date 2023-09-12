const express = require("express");
const router = express.Router();
const validator = require("validator");//validating the form with validators
const bcrypt = require("bcrypt"); // for hashing passwords
const saltRounds = 10;// set saltrounds to 10
const pool = require("../util/database").pool;
const jwt = require("jsonwebtoken") // import jsonwebtoken
const config = require("../config")
const verifyToken = require("../Controllers/auth/verifyToken")
const {sendEmail} = require('../Helpers/email')
// ... (Other imports and configurations)

// API endpoint to create a new user
router.post('/users',async (req, res) => {
    try {
        const { location, name, email, password } = req.body;

        // Input validation
        if (!validator.isLength(name, { min: 1 }) || validator.isNumeric(name)) {
            return res.status(400).json({ error: "Name must not be empty and must contain characters, not numbers" });
        }

        // Validate email
        if (!validator.isEmail(email)) {
            return res.status(400).json({ error: 'Invalid email' });
        }

        // Validate password
        if (!validator.isStrongPassword(password, {
            minLength: 6,
            minUpperCase: 1,
            minLowerCase: 1,
            minNumbers: 1,
            minSymbols: 1,
        })) {
            return res.status(400).json({ error: "Password must include Uppercase, Lowercase, Numbers, and Symbols" });
        }

        // Hash the password before storing it in the database
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Insert the user into the database
       const [insertResult] =await pool.query('INSERT INTO user (location, name, email, password) VALUES (?, ?, ?, ?)', [location, name, email, hashedPassword]);
       userId = insertResult.userId;//  get the inserted userid
        console.log('User inserted successfully');
       
       
         
        return res.status(200).json({ message: 'User inserted successfully'});

       
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});




router.post('/confirmuser', async (req, res) => {
    const { email } = req.body;
    
    try {
        const [Result] = await pool.query('SELECT * FROM user WHERE email = ?', [email]);
        
        // Check if user already exists
        if (!Result || Result.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        const userId = Result[0].id;
        
        // Generate a confirmation token
        const confirmationToken = jwt.sign({ userId }, config.EMAIL_VERIFICATION_TOKEN, { expiresIn: '2h' });
        
        // Save the token to the database (associate it with the user)
        await pool.query('INSERT INTO confirmation_token (user_id, token) VALUES (?, ?)', [userId, confirmationToken]);
        
        // Send a confirmation email with the confirmation link
        const confirmationLink = `${config.BASE_URL}/confirm?token=${confirmationToken}`;
        const details = {
            templateContent: ['name', 'confirmEmail', confirmationLink], // Adjust as needed
        };
        
        await sendEmail(email, 'Confirm Your Email', 'Please confirm your email', details);

        res.status(200).json({ message: 'Email confirmation sent successfully' });

        
    } catch (error) {
        console.error("Error confirming user:", error);
        res.status(500).json({ error: 'Confirmation link failed' });
    }
});


router.post('/register', async (req, res) => {
    try {
        const { location, name, email, password } = req.body;

        // Input validation
        if (!validator.isLength(name, { min: 1 }) || validator.isNumeric(name)) {
            return res.status(400).json({ error: "Name must not be empty and must contain characters, not numbers" });
        }

        // Validate email
        if (!validator.isEmail(email)) {
            return res.status(400).json({ error: 'Invalid email' });
        }

        // Validate password
        if (!validator.isStrongPassword(password, {
            minLength: 6,
            minUpperCase: 1,
            minLowerCase: 1,
            minNumbers: 1,
            minSymbols: 1,
        })) {
            return res.status(400).json({ error: "Password must include Uppercase, Lowercase, Numbers, and Symbols" });
        }

        // Hash the password before storing it in the database
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Insert the user into the database
        const [insertResult] = await pool.query(
            'INSERT INTO user (location, name, email, password) VALUES (?, ?, ?, ?)',
            [location, name, email, hashedPassword]
        );

        const userId = insertResult.insertId; // Use insertId to get the generated user ID

        // Generate a confirmation token
        const confirmationToken = jwt.sign({ userId }, config.EMAIL_VERIFICATION_TOKEN, { expiresIn: '24h' });

        // Save the token to the database (associate it with the user)
        await pool.query('INSERT INTO confirmation_token (user_id, token) VALUES (?, ?)', [userId, confirmationToken]);

        // Send a confirmation email with the confirmation link
        const confirmationLink = `${config.BASE_URL}`;
        const emailDetails = {
            templateContent: ['username', 'confirmEmail', confirmationLink], // Adjust as needed
        };

        // Import the sendEmail function and use it to send the email
        await sendEmail(email, 'Confirm Your Email', 'Please confirm your email', emailDetails);

        console.log('User registered successfully');

        return res.status(200).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});


router.post('/login',async(req,res)=>{
    try {
        const {email,password} = req.body

        const [result] = await pool.query('SELECT * FROM user WHERE email = ?', [email])

        if(result.length===0){
            throw new Error('invalid email or password')
        }

        const [user] = result[0]

        const passwordMatched =await bcrypt.compare(password,user.password)

        if(!passwordMatched){
            throw new Error('password mismatch')
        }

        const payload = {
            id:user.id,// Adding the user ID or any other user data to the payload
            email:user.email,
        }
        const accessToken = jwt.sign(payload, config.ACCESS_TOKEN_PRIVATE_KEY, { expiresIn: '2h' }); // '2h' means the token will expire in 2 hour
        const refreshToken = jwt.sign(payload, config.REFRESH_TOKEN_PRIVATE_KEY, {}); // Generate refresh token

        console.log('user logged in succefully',accessToken,refreshToken )
        res.status(200).json({message:'sucessful login',accessToken,refreshToken})
    } catch (error) {
        throw new Error('login rejected',error)
    }
})
router.post('/updatepassword', async (req, res) => {
    try {
      const { currentPassword, newPassword } = req.body;
      const { id } = req.user;
      const [result] = await pool.query('SELECT * FROM user WHERE id = ?', [id]);
  
      if (!result || result.length === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
      
      //const user = result[0]; 
  
      const passwordMatched = await bcrypt.compare(currentPassword, user.password);
  
      if (!passwordMatched) {
        throw new Error('Password mismatch');
      }
  
      const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
      await pool.query('UPDATE user SET password = ? WHERE id = ?', [hashedPassword, id]); // Fix the query
  
      res.status(200).json({ message: 'User\'s password updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error updating password' });
    }
  });
  

router.post('/forget-password', async (req, res) => {
    try {
      const { email } = req.body;
      const [result] = await pool.query('SELECT * FROM user WHERE email = ?', [email]);
  
      if (!result || result.length === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      const userId = result[0].id;
      const resetToken = jwt.sign({ userId }, config.RESET_PASSWORD_TOKEN, { expiresIn: '24m' });
      const resetLink = `${config.BASE_URL}/forget-password/${resetToken}`;

      console.log('result:', result); // Check the value of 'result'
      console.log('resetLink:', resetLink); // Check the value of 'resetLink'
      console.log('result[0].name:', result[0].name); // Check the value of 'name' property
  
      const details = {
        templateContent:[result[0].name, 'resetPassword', resetLink]
      };
      console.log('details:', details);
      await sendEmail(email, 'Reset Your Password','please reset your password', details);
      res.status(200).json({ message: 'Reset link sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  

  router.post('/resetPassword/:token', async (req, res) => {
    try {
        const { token } = req.params;
        const { newPassword } = req.body;

        // Verify and decode the reset token
        let decodedToken;
        try {
            decodedToken = jwt.verify(token, config.RESET_PASSWORD_TOKEN);
        } catch (error) {
            // Handle token verification errors
            console.error('Error verifying reset token:', error);
            return res.status(400).json({ error: 'Invalid or expired token' });
        }

        const userId = decodedToken.userId;

        // Check if the user exists
        const [userResult] = await pool.query('SELECT * FROM user WHERE id = ?', [userId]);

        if (!userResult || userResult.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

        // Update the user's password in the database
        await pool.query('UPDATE user SET password = ? WHERE id = ?', [hashedPassword, userId]);

        res.status(200).json({ message: 'Password reset successfully' });
    } catch (error) {
        console.error('Error resetting password:', error);
        res.status(500).json({ error: 'An error occurred while resetting the password' });
    }
});

  

// API endpoint to retrieve all users
router.get('/users',verifyToken,async (req, res) => {
    try {
      const [result] = await  pool.query('SELECT * FROM user')
      res.send(result)
    } catch (error) {
        res.status(500).json({ error: "internal error"})
    }
});

// API endpoint to get a specific user by id
router.get('/users/:id', async (req, res) => {
    const userId = req.params.id;
    try {
        const [result] = await pool.query('SELECT * FROM user WHERE id = ?', [userId]);
        if (result.length === 0) {
            res.status(404).json({ error: 'User ID not found' });
        } else {
            const user = result[0];
            res.status(200).json({ user });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Update a particular user's information
router.patch('/users/:id', (req, res) => {
    const userId = req.params.id;
    const updatedFields = req.body;

    // Prepare the SET clause with column names dynamically using template literals
    let setClause = '';
    for (const key in updatedFields) {
        if (updatedFields.hasOwnProperty(key)) {
            setClause += `${key} = ?, `;
        }
    }
    setClause = setClause.slice(0, -2); // Remove the last comma and space

    pool.query(
        `UPDATE user SET ${setClause} WHERE id = ?`,
        [...Object.values(updatedFields), userId],
        (error, result) => {
            if (error) {
                console.log(error);
                res.status(500).json({ error: 'Internal server error' });
            } else {
                if (result.affectedRows === 0) {
                    res.status(400).json({ message: 'User information not updated' });
                } else {
                    res.status(200).json({ message: 'User information updated successfully' });
                }
            }
        }
    );
});


// Change user information completely
router.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;

    pool.query('UPDATE user SET ? WHERE id = ?', [updatedUser, userId], (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            if (result.affectedRows === 0) {
                res.status(400).json({ message: 'User information not updated' });
            } else {
                res.status(200).json({ message: 'User information updated successfully' });
            }
        }
    });
});


//Delete users
router.delete('/users',async(req, res) => {
    try {
       const [result]  = await pool.query('DELETE FROM user')
       res.send(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "internal error"})
    }
})

// Delete a user
router.delete('/users/:id', (req, res) => {
    const userId = req.params.id;

    pool.query('DELETE FROM user WHERE id = ?', [userId], (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            if (result.affectedRows === 0) {
                res.status(400).json({ message: 'User not found' });
            } else {
                res.status(200).json({ message: 'User deleted successfully' });
            }
        }
    });
});

module.exports = router
