import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", 
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL,
    pass: process.env.NEXT_PUBLIC_PWD,
  },

});


export type ContactType = {
	title: string;
	message: string;
};

type MailOptionType = {
	to: string;
	subject: string;
	html: string;
};

export function sendEmail({title, message }: ContactType) {
	const mailOptions: MailOptionType = {
		to: process.env.NEXT_PUBLIC_EMAIL || '',
		subject: `${title}`,
		html: `
    		<h1>${title}</h1>
    		<div>${message}</div>
    		</br>
    		`,
		};
	return transporter.sendMail(mailOptions);
}