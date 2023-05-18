import { useEffect } from "react";

const useTitle = (title) => {
	useEffect(() => {
		document.title = `${title} - Baby Toy`;
	}, [title]);
};

export default useTitle;
