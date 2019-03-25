import React, { Component } from 'react'

const ShmooSearch = (props) => {
  return (
    <div>
      <span id="shmoo-search">{props.data.message[props.data.iteration]}</span>
      <span id="shmoo-button" onClick={props.loopMessage}>Click</span>
    </div>
  )
}

export default ShmooSearch
