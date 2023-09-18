async function common_main () {
    
    await fillSrcs(srcs)
    await fillHrefs(hrefs)
    await pageMode()
}

common_main()