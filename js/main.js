let userList
const fetchUsers = async () => {
  // const users = await ((await window.fetch('http://localhost:9000/getusers')).json())
  const users = await ((await window.fetch('/.netlify/functions/getusers')).json())
  console.log(users)
  return users
}
fetchUsers().then(data => {
  userList = document.querySelector('#users')
  data.forEach(user => {
    const li = document.createElement('li')
    li.className = 'list-group-item'
    const link = document.createElement('a')
    link.appendChild(document.createTextNode(user.login))
    link.href = user.html_url
    link.target = '_blank'
    li.appendChild(link)
    userList.appendChild(li)
  })
})
