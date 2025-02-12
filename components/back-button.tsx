"use client"

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function BackButton() {
  const router = useRouter()

  return (
    <Button
      variant="ghost"
      size="icon"
      className="fixed left-4 top-24 z-50 bg-white/50 backdrop-blur-sm hover:bg-white/80"
      onClick={() => router.back()}
    >
      <ArrowLeft className="h-5 w-5" />
    </Button>
  )
}