import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { login } from 'src/apis/auth.api'
import Input from 'src/components/Input'
import type { ResponseApi } from 'src/types/ultil.type'
import { loginSchema, type LoginSchema } from 'src/utils/rules'
import { isAxiosErrorHttpStatusCode } from 'src/utils/ultils'

type FormData = LoginSchema
export default function Login() {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    register,
    handleSubmit,
    setError,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors }
  } = useForm<FormData>({ resolver: yupResolver(loginSchema) })
  const loginMatation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => login(body)
  })
  const onSubmit = handleSubmit(
    (data) => {
      loginMatation.mutate(data, {
        onSuccess: (data) => {
          console.log(data)
        },
        onError: (error) => {
          if (isAxiosErrorHttpStatusCode<ResponseApi<FormData>>(error)) {
            const formError = error.response?.data.data
            if (formError) {
              Object.keys(formError).forEach((key) => {
                setError(key as keyof FormData, {
                  message: formError[key as keyof FormData],
                  type: 'Server'
                })
              })
            }
          }
        }
      })
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (data) => {}
  )
  return (
    <div className='bg-orange'>
      <div className='max-w-7xl mx-auto px-4 '>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng nhập</div>
              <Input
                name='email'
                register={register}
                type='email'
                className='mt-8'
                errorMessage={errors.email?.message}
                placeholder='Email'
              />
              <Input
                name='password'
                register={register}
                type='password'
                className='mt-2'
                errorMessage={errors.password?.message}
                placeholder='Password'
              />
              <div className='mt-3'>
                <button className='w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm:hover:bg-red-600 rounded'>
                  Đăng nhập
                </button>
              </div>
              <div className='flex items-center justify-center mt-8'>
                <div className='text-gray-400'>Bạn chưa có tài khoản?</div>
                <Link className='text-red-400 ml-1' to='/register'>
                  Đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
