"use client"

import { styled } from 'styled-components'

const StyledComponent = styled.div`
  /* Component-specific styles loaded only when needed */
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  border-radius: 1rem;
`

export function OptimizedComponent() {
  return (
    <StyledComponent>
      {/* Content */}
    </StyledComponent>
  )
} 