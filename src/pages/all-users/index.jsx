import DashboardHeader from '../../components/header/dashbaordHeader'
import DashbaordSidebar from '../../components/header/dashboardSidebar'
import AllUserSection from '../../components/section/allUsers'
import '../../components/styles/dashboard-styles/styles.css'
import '../../App.css'

export default function AllUserPage() {

  return (
    <>

      <DashboardHeader />

      
      <div className='container-fluid'>

        <div className='row'>

          <DashbaordSidebar
            nav_item_color1="black"
            nav_item_color2="black"
            nav_item_color3="black"
            nav_item_color4="black"
            nav_item_color5="#F8B602"
            nav_item_color6="black"
            nav_item_color7="black"
            nav_item_color8="black"
            nav_item_color9="black"
            nav_item_color10="black"
            nav_item_color11="black"
            nav_item_color12="black"
            nav_item_color13="black"
            nav_item_color14="black"
          />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4" style={{ backgroundColor: "#F2F4F7" }}>

            <AllUserSection />

          </main>


        </div>

      </div>
  

    </>
  )
}