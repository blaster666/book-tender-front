import Router from "next/router";
import React,{ Component } from 'react'

export default () => {
  return (
    <div>about<a onClick={ () => Router.push('/') }>back</a></div>
  )
}