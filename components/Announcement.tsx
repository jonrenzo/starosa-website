import { Slot } from '@radix-ui/react-slot'
import React, { ReactNode } from 'react'

interface AnnouncementProps {
    children: ReactNode | ReactNode[]
}
const Announcement = ({ children }: AnnouncementProps) => {
    return (
        <div className="border-b border-primary-200 bg-red-100 px-4 py-2 text-gray-900 font-poppins text-sm">
            {children}
        </div>
    )
}

export default Announcement
