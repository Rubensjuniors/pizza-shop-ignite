import { api } from '@/lib/axios'

export interface IManagedRestaurant {
  id: string
  name: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getManagedRestaurant() {
  const response = await api.get<IManagedRestaurant>('/managed-restaurant')

  return response.data
}
