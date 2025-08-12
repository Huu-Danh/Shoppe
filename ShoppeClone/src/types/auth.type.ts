import { type SuccessResponse } from './ultil.type'
import { type User } from './user.type'
export type AuthResponse = SuccessResponse<{
  access_token: string
  expires: string
  user: User
}>
