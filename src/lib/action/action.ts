'use server'
import { supabase } from '@/utils/supabase/supbase'

export async function getProfileImageUrl() {
  try {
    const { data } = await supabase
      .storage
      .from('profile_images')
      .getPublicUrl('profile.jpeg')

    if (!data || !data.publicUrl) {
      throw new Error('Failed to get public URL')
    }

    return data.publicUrl
  } catch (error) {
    console.error('Error fetching profile image:', error)
    return null
  }
}


export async function getSkills() {
  try {
    const { data, error } = await supabase
      .from('skills')
      .select('*')
      .order('id')

    if (error) {
      throw error
    }

    return data
  } catch (error) {
    console.error('Error fetching skills:', error)
    return []
  }
}


export async function getPortfolios() {
  try {
    const { data, error } = await supabase
      .from('portfolios')
      .select('*')
      .order('order')

    if (error) {
      throw error
    }

    return data
  } catch (error) {
    console.error('Error fetching portfolios:', error)
    return []
  }
}