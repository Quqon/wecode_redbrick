const dataSource = require('./dataSource')

const getUserByemail = async (email) => {

	const [user] = await dataSource.query(`
		SELECT 
            id,
            email,
            name,
            gender,
            age,
            platform,
            image_url
		FROM users
		WHERE email = ?`, [email]
	)

    return user;
}


const gitSignUp = async (name, email, imageUrl, platform) => {

    return await dataSource.query(`
        INSERT INTO users (
          email, name, platform, image_url
          ) VALUES (
                  ?,
                  ?, 
                  ?, 
                  ?
          )`,
      [email, name, platform, imageUrl]
    )
}

module.exports = { 
    getUserByemail,
    gitSignUp
}