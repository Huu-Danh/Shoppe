import { type ResponseApi } from './ultil.type'
import { type User } from './user.type'
export type AuthResponse = ResponseApi<{
  access_token: string
  expires: string
  user: User
}>
