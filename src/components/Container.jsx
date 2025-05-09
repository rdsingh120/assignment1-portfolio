const Container = ({children}) => {
  return (
    <div className="bg-[#f9f9f9]">
      <div className="max-w-screen-md m-auto min-h-[84.7vh] p-5 space-y-4">
        <div className="mt-10">{children}</div>
      </div>
    </div>
  )
}
export default Container