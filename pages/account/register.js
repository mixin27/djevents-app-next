import Link from 'next/link'
import { useState, useEffect, useContext } from 'react'
import { FaUser } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Layout from '@/components/Layout'
import AuthContext from '@/context/AuthContext'
import styles from '@/styles/AuthForm.module.css'

export default function RegisterPage() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const { register, error } = useContext(AuthContext)

  useEffect(() => error && toast.error(error))

  const submitHandler = (e) => {
    e.preventDefault()

    if (password !== passwordConfirm) {
      toast.error('Password do not match.')
      return
    }

    register({ username, email, password })
  }

  return (
    <Layout title='User Registration'>
      <div className={styles.auth}>
        <h1>
          <FaUser /> Sign Up
        </h1>
        <ToastContainer />

        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              name='username'
              id='username'
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor='email'>Email Address</label>
            <input
              type='email'
              name='email'
              id='email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor='passwordConfirm'>Confirm Password</label>
            <input
              type='password'
              name='passwordConfirm'
              id='passwordConfirm'
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>

          <input type='submit' value='Register' className='btn' />
        </form>

        <p>
          Already have an account? <Link href='/account/login'>Login</Link>
        </p>
      </div>
    </Layout>
  )
}
