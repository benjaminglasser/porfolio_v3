const HomePageExtraInfo = () => {
  return (
    <div className="sm:col-span-3 extra-info">
      <div className="pl-4 pt-9 flex flex-col justify-between h-full relative">
        <p className="tag">
          <i className="text-sm">media artist, musician + designer</i>
        </p>
        <div className="description absolute right-[2rem] -bottom-[8rem]">
          <p className="text-end">Born 1994</p>
          <p className="text-end">
            Currently at{" "}
            <span className="ojuju hover:text-pink">
              <a
                href="https://easelapps.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                Easel AI
              </a>
            </span>
          </p>
          <p className="text-end">30.2672°N, 97.7431°W</p>
        </div>
      </div>
    </div>
  );
};

export default HomePageExtraInfo;
