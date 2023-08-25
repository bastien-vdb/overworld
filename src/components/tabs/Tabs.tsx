type TabsProps = {
    tabs: any,
    onTabClick: (country: string) => void,
    activeTab:string
}


function Tabs({ tabs, onTabClick, activeTab }: TabsProps) {
    return (
        <div className="tabs">
            {Object.keys(tabs).map((element: string) => {
                return (
                <a className={`tab tab-lifted ${activeTab === element ? 'tab-active' : ''}`} key={element} onClick={() => onTabClick(element)}>
                    <span className={`text-gray-300 ${activeTab === element ? 'font-bold text-gray-600 text-xl duration-700' : ''}`}>{element.toUpperCase()}</span>
                </a>
            )})}

        </div>
    );
}

export default Tabs;