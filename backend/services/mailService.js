const axios = require('axios');

/**
 * Send OTP email via Brevo REST API (HTTPS — works on Render free tier).
 * Uses axios to call Brevo's transactional email endpoint directly.
 */
const sendEmailOTP = async (to, otp) => {
    if (!process.env.BREVO_API_KEY) {
        console.log('--- EMAIL SIMULATION (No BREVO_API_KEY in .env) ---');
        console.log('TO:', to);
        console.log('---------------------------------------------------');
        return true;
    }

    try {
        await axios.post(
            'https://api.brevo.com/v3/smtp/email',
            {
                sender: {
                    name: 'Smart Scholarship Portal',
                    email: process.env.BREVO_SENDER_EMAIL
                },
                to: [{ email: to }],
                subject: '🔒 Your Login OTP - Smart Scholarship Portal',
                htmlContent: `
                    <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 10px; max-width: 500px; margin: auto;">
                        <h2 style="color: #1e3a8a; text-align: center;">Smart Scholarship Portal</h2>
                        <hr>
                        <p>Hello,</p>
                        <p>You requested a One-Time Password (OTP) to login. Please use the code below:</p>
                        <div style="background: #f3f4f6; padding: 15px; text-align: center; border-radius: 8px; margin: 20px 0;">
                            <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #059669;">${otp}</span>
                        </div>
                        <p style="font-size: 12px; color: #666;">This OTP is valid for <b>5 minutes</b>. Do not share this code with anyone.</p>
                        <hr>
                        <p style="font-size: 10px; color: #999; text-align: center;">Smart Scholarship Portal | Student Welfare Department</p>
                    </div>
                `
            },
            {
                headers: {
                    'api-key': process.env.BREVO_API_KEY,
                    'Content-Type': 'application/json'
                }
            }
        );

        console.log(`[EMAIL SUCCESS] OTP sent to ${to} via Brevo`);
        return true;
    } catch (error) {
        const errMsg = error.response?.data?.message || error.message;
        console.error(`[EMAIL FAILURE] To: ${to}, Error:`, errMsg);
        return false;
    }
};

module.exports = { sendEmailOTP };
