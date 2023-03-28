import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Details() {
    const router = useRouter()
    const { id } = router.query

  return (
    <div>Details --- { id }</div>
  )
}
