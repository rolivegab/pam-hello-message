import React, { useState, useEffect } from 'react'
import request from '../utils/request';

const hello: React.FC = () => {
  const [message, setMessage] = useState<string | undefined>(undefined);

  useEffect(() => {
    request<{message: string}>('printHello').then(data => setMessage(data.message))
  }, [])

  if (!message) {
    return <>Carregando mensagem...</>
  }

  return <>{message}</>
}

export default hello
