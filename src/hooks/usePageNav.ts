import { useNavigate } from 'react-router'

export const usePageNav = () => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  return { handleGoBack }
}
