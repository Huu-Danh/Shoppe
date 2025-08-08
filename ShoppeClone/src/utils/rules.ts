/* eslint-disable @typescript-eslint/no-explicit-any */
// import type { UseFormGetValues } from 'react-hook-form'
import * as yup from 'yup'
// type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }
// export const getRules = (getValues?: UseFormGetValues<any>) => ({
//   email: {
//     required: { value: true, message: 'Email là bắt buộc' },
//     pattern: {
//       value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
//       message: 'Địa chỉ email không đúng định dạng'
//     },
//     maxLength: {
//       value: 160,
//       message: 'Độ dài từ 5-160 ký tự'
//     },
//     minLength: {
//       value: 5,
//       message: 'Độ dài từ 5-160 ký tự'
//     }
//   },
//   password: {
//     required: { value: true, message: 'Password là bắt buộc' },
//     maxLength: {
//       value: 160,
//       message: 'Độ dài từ 6-160 ký tự'
//     },
//     minLength: {
//       value: 6,
//       message: 'Độ dài từ 6-160 ký tự'
//     }
//   },
//   confirm_password: {
//     required: { value: true, message: 'Nhập lại password là bắt buộc' },
//     maxLength: {
//       value: 160,
//       message: 'Độ dài từ 6-160 ký tự'
//     },
//     minLength: {
//       value: 6,
//       message: 'Độ dài từ 6-160 ký tự'
//     },
//     validate:
//       typeof getValues === 'function'
//         ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
//           (val: any) => val === getValues('password') || 'Nhập lại password không khớp'
//         : undefined
//   }
// })

export const schema = yup.object({
  email: yup
    .string()
    .required('Email là bắt buộc')
    .email('Địa chỉ email không đúng định dạng')
    .min(5, 'Độ dài từ 5-160 ký tự')
    .max(160, 'Độ dài từ 5-160 ký tự'),
  password: yup
    .string()
    .required('Password là bắt buộc')
    .min(6, 'Độ dài từ 6-160 ký tự')
    .max(160, 'Độ dài từ 6-160 ký tự'),
  confirm_password: yup
    .string()
    .required('Nhập lại password là bắt buộc')
    .min(6, 'Độ dài từ 6-160 ký tự')
    .max(160, 'Độ dài từ 6-160 ký tự')
    .oneOf([yup.ref('password')], 'Nhập lại password không khớp')
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const loginSchema = schema.omit(['confirm_password'])
export type LoginSchema = yup.InferType<typeof loginSchema>
export type Schema = yup.InferType<typeof schema>
