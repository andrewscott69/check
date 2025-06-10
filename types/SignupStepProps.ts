
import type { SignupData } from "@/app/u/signup/page"
import type { toast } from "sonner"

export type NotifyFn = typeof toast

export interface SignupStepProps {
  data: SignupData
  onNext: (data: SignupData) => void
  onPrev?: () => void
  onSubmit?: (finalData: SignupData) => Promise<void>
  isLoading: boolean
  notify?: NotifyFn
}
