import React from 'react'
import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'

const BlogsPage = () => {
  return (
    <main>
      <CustomBreadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Blogs' },
      ]} />
      
    </main>
  )
}

export default BlogsPage
