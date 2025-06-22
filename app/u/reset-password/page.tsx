import { Suspense } from "react"
import ResetPasswordPage from "./ResetPasswordPage"

export default function ResetPasswordWrapper() {
  return (
    <Suspense fallback={<div className="text-center p-10 text-lg font-medium">Loading...</div>}>
      <ResetPasswordPage />
    </Suspense>
  )
}
