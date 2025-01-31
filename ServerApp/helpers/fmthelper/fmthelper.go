package fmthelper

import "fmt"

func WriteRedLine(message string) {
	colorReset := "\033[0m"

	colorRed := "\033[31m"
	/* colorGreen := "\033[32m"
	colorYellow := "\033[33m"
	colorBlue := "\033[34m"
	colorPurple := "\033[35m"
	colorCyan := "\033[36m"
	colorWhite := "\033[37m" */
	fmt.Println(string(colorRed), message, string(colorReset))
}
func WriteErrorToFMT(pError error) {
	colorReset := "\033[0m"

	colorRed := "\033[31m"
	/* colorGreen := "\033[32m"
	colorYellow := "\033[33m"
	colorBlue := "\033[34m"
	colorPurple := "\033[35m"
	colorCyan := "\033[36m"
	colorWhite := "\033[37m" */
	fmt.Println(string(colorRed), pError, string(colorReset))
}
