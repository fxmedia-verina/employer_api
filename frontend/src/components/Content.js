import SidebarMenu from "./SidebarMenu";

const Content = ({children}) => {
	return (
		<div>
			<div className="inner-wrapper">
					<SidebarMenu/>

					<section role="main" className="content-body">
						{children}
					</section>
				</div>
		</div>												
	)
}

export default Content
