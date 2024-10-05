import Text from '../ui/text'

export default function Footer() {
  return (
    <footer className=" py-4 flex justify-center items-center">
      <Text lightness={400}>
        © {new Date().getFullYear()} All rights reserved. Ricardo Adorno
      </Text>
    </footer>
  )
}
