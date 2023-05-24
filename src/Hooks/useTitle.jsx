import { useEffect } from "react";

const useTitle = (title) => {
	useEffect(() => {
		document.title = `BabyToy | ${title}`;
	}, [title]);
};

export default useTitle;
