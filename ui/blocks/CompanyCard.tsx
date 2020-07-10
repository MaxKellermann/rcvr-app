import * as React from 'react'

import { isCareEnv } from '~lib/config'
import { ActionCard } from '~ui/blocks/ActionCard'
import { IconButton } from '~ui/core'
import { Edit, Trash } from '~ui/svg'

export const CompanyCard = ({ company, onEdit, onDelete }) => {
  const menuText = React.useMemo(() => {
    if (company.menuPdfLink) return 'PDF Anhang'

    return company.menuLink || '–'
  }, [company])

  return (
    <ActionCard
      href="/business/company/[companyId]"
      as={`/business/company/${company.id}`}
    >
      <ActionCard.Main
        title={company.name}
        subtitle={!isCareEnv && 'Speisekarte: ' + menuText}
      />
      <ActionCard.Actions>
        <IconButton
          icon={Edit}
          color="yellow.500"
          onClick={onEdit}
          title="Ändern"
        />
        <IconButton icon={Trash} color="red.500" onClick={onDelete} />
      </ActionCard.Actions>
    </ActionCard>
  )
}
