const Footer: React.FC = () => {
  return <div>Some footer</div>
}

const MainWrap: React.FC = (props) => {
  return (
    <div>
      {props.children}
      <Footer />
    </div>
  )
}

export default MainWrap
