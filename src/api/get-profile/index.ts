import { api } from '@/lib/axios'

export interface IProfile {
  id: string
  name: string
  email: string
  phone: string | null
  role: 'manager' | 'customer'
  createdAt: Date | null
  updatedAt: Date | null
}

export async function getProfile() {
  const response = await api.get<IProfile>('/me')

  return response.data
}
