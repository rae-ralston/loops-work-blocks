import { useState } from 'react'

export function useTitle() {
  const [title, setTitle] = useState('');

  return [title, setTitle]
}