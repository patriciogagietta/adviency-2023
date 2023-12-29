
export const ListGifts = ({ gifts }) => {
  return (
    <ul>
      {gifts.map((gift, index) => (
            <li key={index}>
                {gift}
            </li>
        ))}
    </ul>
  )
}
