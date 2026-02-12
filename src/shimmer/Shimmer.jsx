import React from 'react'
import { ShimmerPostList } from 'react-shimmer-effects'
export default function Shimmer() {
  return (
    <div>
        <ShimmerPostList postStyle="STYLE_FOUR" col={4} row={6} gap={30} />;
    </div>
  )
}
