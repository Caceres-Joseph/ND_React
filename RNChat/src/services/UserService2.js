import ConnectyCube from 'connectycube-reactnative'

class UserService2 {
	signin(user) {
		return new Promise((resolve, reject) => {
			ConnectyCube.createSession(user, (error, session) => {
				session ? resolve(session.user) : reject(error)
			})
		})
	}
}

// create instance
const User = new UserService2()

// lock instance
Object.freeze(User)

export default User
