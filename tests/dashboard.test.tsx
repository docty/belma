import Dashboard from "../pages/dashboard";
 
test('dashboard element', () => {
    render(<Dashboard/>);
    const element = screen.getByTest(/Dashboard/gi);

    expect(element).toBeInTheDocument();

})