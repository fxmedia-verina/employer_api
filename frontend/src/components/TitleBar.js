const TitleBar = ({judul}) => {
	return (
		<header className="page-header">
			<h2>{judul}</h2>
		
			<div className="right-wrapper pull-right">
				<ol className="breadcrumbs">
					<li>
						<a href="index.html">
							<i className="fa fa-home"></i>
						</a>
					</li>
					<li><span>{judul}</span></li>
				</ol>
		
				<a className="sidebar-right-toggle" data-open="sidebar-right"><i className="fa fa-chevron-left"></i></a>
			</div>
		</header>
	)
}

export default TitleBar
