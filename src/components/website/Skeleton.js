import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton';

export default function Show_skeleton({height ,col,width,caunt}) {
    // Skeleton loading
    //Skeleton
const renderSkeletons = [];
for (let i = 0; i < caunt; i++) {
  renderSkeletons.push(
    <div key={i}  className={col}>
      <Skeleton height={height} width={width}/>
    </div>
  );
}
  return (<>
    {renderSkeletons}
    </>
  )
}
