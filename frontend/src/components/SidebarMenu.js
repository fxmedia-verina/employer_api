const SidebarMenu = () => {
	return (
		<aside id="sidebar-left" className="sidebar-left">
			<div className="sidebar-header">
				<div className="sidebar-title">
					Navigation
				</div>
				<div className="sidebar-toggle hidden-xs" data-toggle-class="sidebar-left-collapsed" data-target="html" data-fire-event="sidebar-left-toggle">
					<i className="fa fa-bars" aria-label="Toggle sidebar"></i>
				</div>
			</div>
			<div className="nano">
				<div className="nano-content">
					<nav id="menu" className="nav-main" role="navigation">
						<ul className="nav nav-main">
							<li className="nav-active">
								<a href="/">
									<i className="fa fa-home" aria-hidden="true"></i>
									<span>Dashboard</span>
								</a>
							</li>
							<li className="nav-active">
								<a href="/employees">
									<i className="fa fa-users" aria-hidden="true"></i>
									<span>Employees</span>
								</a>
							</li>
							<li className="nav-active">
								<a href="/add-employee">
									<i className="fa fa-plus" aria-hidden="true"></i>
									<span>Add Employees</span>
								</a>
							</li>
						</ul>
					</nav>
		
					<hr className="separator" />
		
					<div className="sidebar-widget widget-tasks">
						<div className="widget-header">
							<h6>Projects</h6>
							<div className="widget-toggle">+</div>
						</div>
						<div className="widget-content">
							<ul className="list-unstyled m-none">
								<li><a href="#">JSOFT HTML5 Template</a></li>
								<li><a href="#">Tucson Template</a></li>
								<li><a href="#">JSOFT Admin</a></li>
							</ul>
						</div>
					</div>
		
					<hr className="separator" />
		
					<div className="sidebar-widget widget-stats">
						<div className="widget-header">
							<h6>Company Stats</h6>
							<div className="widget-toggle">+</div>
						</div>
						<div className="widget-content">
							<ul>
								<li>
									<span className="stats-title">Stat 1</span>
									<span className="stats-complete">85%</span>
									<div className="progress">
										<div className="progress-bar progress-bar-primary progress-without-number" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: '85%'}}>
											<span className="sr-only">85% Complete</span>
										</div>
									</div>
								</li>
								<li>
									<span className="stats-title">Stat 2</span>
									<span className="stats-complete">70%</span>
									<div className="progress">
										<div className="progress-bar progress-bar-primary progress-without-number" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: '70%'}}>
											<span className="sr-only">70% Complete</span>
										</div>
									</div>
								</li>
								<li>
									<span className="stats-title">Stat 3</span>
									<span className="stats-complete">2%</span>
									<div className="progress">
										<div className="progress-bar progress-bar-primary progress-without-number" role="progressbar" aria-valuenow="2" aria-valuemin="0" aria-valuemax="100" style={{width: '2%'}}>
											<span className="sr-only">2% Complete</span>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
		
			</div>
		</aside>
	)
}

export default SidebarMenu
