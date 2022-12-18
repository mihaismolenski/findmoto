export const useExportJson = () => {
    const exportJson = (content: string) => {
        var a = document.createElement("a");
        var file = new Blob([content], {type: 'text/plain'});
        a.href = URL.createObjectURL(file);
        a.download = "data.json";
        a.click();
    }

    return [exportJson]
}

export default useExportJson;