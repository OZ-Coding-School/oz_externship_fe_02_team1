import Text from '@/components/common/text/Text'
import H3 from '@/components/common/text/H3'
import { type ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils'
import { Link } from 'react-router'

export interface CardProps extends ComponentPropsWithoutRef<'div'> {
  title?: string
  subtitle?: string
  content?: string
  navigation?: string
  cardForm?: 'study' | 'class'
}

export default function Card({
  title = '제목입니다',
  subtitle = '부제목입니다',
  content,
  className,
  navigation = '/',
  cardForm = 'class',
  ...rest
}: CardProps) {
  return (
    <div className={cn('p-6', className)} {...rest}>
      {/* 이미지 인풋 넣을 예정 */}
      <img className="h-52" src="https://placehold.co/382x215" />
      <div className="flex max-w-[400px] flex-col gap-4 p-6">
        <div>
          <H3>{title}</H3>
          {cardForm === 'class' && <Text variant="base">{subtitle}</Text>}
        </div>
        <div>
          {/* study일때만 content 보여주기 */}
          {cardForm === 'study' && (
            <div className="flex flex-col gap-3">{content}</div>
          )}
          <Link to={navigation} className="text-primary-400 mt-1 block">
            {cardForm === 'study' ? '자세히 보기 ->' : '강의 바로가기'}
          </Link>
        </div>
      </div>
    </div>
  )
}
