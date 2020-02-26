import ky from 'ky/umd'
import urljoin from 'url-join'

export default async <T>(endpoint: string, data?: any) => ky.post(urljoin(`/api/${endpoint}`)).json<T>()
