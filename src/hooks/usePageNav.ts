import { useNavigate, useParams } from 'react-router'

export const usePageNav = () => {
  const navigate = useNavigate()
  const params = useParams()

  const handleGoBack = () => {
    navigate(-1)
  }

  const navigateToGroupList = () => {
    navigate('study-group')
  }

  const navigateToGroupEdit = () => {
    navigate(`/study-group/${params.groupId}/edit`)
  }

  const navigateToLogCreate = () => {
    navigate(`/study-group/${params.groupId}/records/create`)
  }

  const navigateToLogEdit = () => {
    navigate(`/study-group/${params.groupId}/records/${params.recordId}/edit`)
  }

  const navigateToLogDetail = (groupId?: string, recordId?: number) => {
    const gId = groupId || params.groupId
    const rId = recordId || params.recordId
    navigate(`/study-group/${gId}/records/${rId}`)
  }

  const navigateToCreateNewStudy = () => {
    navigate('/study-group/create')
  }

  const navigateToGroupDetail = (groupId?: string) => {
    const id = groupId || params.groupId
    navigate(`/study-group/${id}`)
  }

  return {
    handleGoBack,
    navigateToGroupList,
    navigateToGroupEdit,
    navigateToLogCreate,
    navigateToLogEdit,
    navigateToCreateNewStudy,
    navigateToGroupDetail,
    navigateToLogDetail,
  }
}
