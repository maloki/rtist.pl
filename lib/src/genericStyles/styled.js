import React, { Component } from 'react'
import styled from 'styled-components'

export const ContainerNarrow = styled.section`

`

export const HeaderFix = styled.div`
  margin-top:calc(40px + 4px)
`

export const LoginBackground = styled.div`
  width:100%;
  height:100%;
  background-color: #F0F3F5;
  position: relative;
`

export const Input = styled.div`
  width:100%;
  height:100%;
  input{
    width:100%;
    border:none;
    background-color: #fff;
    margin-top:24px;
    padding:18px 0px 18px 10px;
    outline: none;
    &.active{
      border-left:4px solid #3BAB95;
    }
  }
`

export const LoginContainer = styled.div`
  width:20%;
  height:100%;
  margin: 0 auto;
  margin-top:200px;
  h2{
    text-align:center;
    font-size:20px;
  }
  button{
    width:100%;
    padding:15px 0;
    background-color:#3BAB95;
    color:#fff;
    margin-top:24px;
    &.facebook{
      background-color:#3B5998;
    }
  }
  .disclaimer{
    font-size:12px;
    text-align: center;
    margin-top:20px;
    color:#898B8C;
  }
  .or{
    width:100%;
    text-align:center;
    margin-top:30px;
    font-size:16px;
  }
  .alreadyRegistered{
    width:100%;
    color:#898B8C;
    font-size:14px;
    text-decoration:underline;
    text-align:center;
    display: block;
    margin-top:24px;
  }
`

export const LoginLogo = styled.div`
    width:100%;
    a{
      text-decoration: none;
      color:#222222;
    }
    h1{
      font-size:32px;
      font-weight: 500;
      line-height: 40px;
      margin-left:100px;
    }
`
