function Fee(){
    return(

        <>
            <div className="right__box__fee">
                <div className="fee__list">
                    <div className="fee-left">₩226,102 x 7박</div>
                    <div className="fee-right">₩1,582,714</div>
                </div>
                <div className="fee__list">
                    <div className="fee-left">주간할인</div>
                    <div className="fee-right green">-₩284,886</div>
                </div>
                <div className="fee__list">
                    <div className="fee-left">청소비</div>
                    <div className="fee-right">₩25,270</div>
                </div>
                <div className="fee__list">
                    <div className="fee-left">서비스 수수료</div>
                    <div className="fee-right">₩0</div>
                </div>
            </div>
            <div className="underline"></div>
            <div className="right__box__sum">
                <div className="fee-left sum">총 합계</div>
                <div className="fee-right sum">₩1,323,098</div>
            </div>
        </>
    )
}

export default Fee;