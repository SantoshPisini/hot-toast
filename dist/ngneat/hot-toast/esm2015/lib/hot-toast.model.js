export class ToastConfig {
    constructor() {
        /**
         * Sets the reverse order for hot-toast stacking
         *
         * @default false
         */
        this.reverseOrder = false;
        this.ariaLive = 'polite';
        this.role = 'status';
        this.position = 'top-center';
        this.autoClose = true;
        this.theme = 'toast';
        // key in ToastType
        this.success = { content: '' };
        this.error = { content: '' };
        this.loading = { content: '' };
        this.blank = { content: '' };
        this.warning = { content: '' };
    }
}
const isFunction = (valOrFunction) => typeof valOrFunction === 'function';
const ɵ0 = isFunction;
export const resolveValueOrFunction = (valOrFunction, arg) => isFunction(valOrFunction) ? valOrFunction(arg) : valOrFunction;
export class ToastPersistConfig {
    constructor() {
        /**
         *In which storage id vs. counts should be stored
         *
         * @type {('local' | 'session')}
         * @memberof ToastPersistConfig
         * @default 'local'
         */
        this.storage = 'local';
        /**
         *The key pattern to store object in storage. `${id}` in pattern is replaced with actual toast id.
         *
         * @type {('local' | 'session')}
         * @memberof ToastPersistConfig
         * @default 'ngneat/hottoast-${id}'
         */
        this.key = 'ngneat/hototast-${id}';
        /**
         *The number of toasts allowed to show.
         *
         * @memberof ToastPersistConfig
         * @default 1
         */
        this.count = 1;
        this.enabled = false;
    }
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90LXRvYXN0Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL3Byb2plY3RzL25nbmVhdC9ob3QtdG9hc3Qvc3JjLyIsInNvdXJjZXMiOlsibGliL2hvdC10b2FzdC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxNQUFNLE9BQU8sV0FBVztJQUF4QjtRQUNFOzs7O1dBSUc7UUFDSCxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUVyQixhQUFRLEdBQWtCLFFBQVEsQ0FBQztRQUNuQyxTQUFJLEdBQWMsUUFBUSxDQUFDO1FBQzNCLGFBQVEsR0FBa0IsWUFBWSxDQUFDO1FBSXZDLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFLakIsVUFBSyxHQUFlLE9BQU8sQ0FBQztRQUU1QixtQkFBbUI7UUFDbkIsWUFBTyxHQUF5QyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNoRSxVQUFLLEdBQXlDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQzlELFlBQU8sR0FBeUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDaEUsVUFBSyxHQUF5QyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUM5RCxZQUFPLEdBQXlDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ2xFLENBQUM7Q0FBQTtBQWVELE1BQU0sVUFBVSxHQUFHLENBQ2pCLGFBQTRDLEVBQ0UsRUFBRSxDQUFDLE9BQU8sYUFBYSxLQUFLLFVBQVUsQ0FBQzs7QUFFdkYsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQUcsQ0FBZSxhQUE0QyxFQUFFLEdBQVMsRUFBVSxFQUFFLENBQ3RILFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7QUFxTGpFLE1BQU0sT0FBTyxrQkFBa0I7SUFBL0I7UUFDRTs7Ozs7O1dBTUc7UUFDSCxZQUFPLEdBQXlCLE9BQU8sQ0FBQztRQUV4Qzs7Ozs7O1dBTUc7UUFDSCxRQUFHLEdBQVksdUJBQXVCLENBQUM7UUFFdkM7Ozs7O1dBS0c7UUFDSCxVQUFLLEdBQUksQ0FBQyxDQUFDO1FBRVgsWUFBTyxHQUFHLEtBQUssQ0FBQztJQUNsQixDQUFDO0NBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250ZW50IH0gZnJvbSAnQG5nbmVhdC9vdmVydmlldyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBUb2FzdENvbmZpZyBpbXBsZW1lbnRzIERlZmF1bHRUb2FzdE9wdGlvbnMge1xuICAvKipcbiAgICogU2V0cyB0aGUgcmV2ZXJzZSBvcmRlciBmb3IgaG90LXRvYXN0IHN0YWNraW5nXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICByZXZlcnNlT3JkZXIgPSBmYWxzZTtcblxuICBhcmlhTGl2ZTogVG9hc3RBcmlhTGl2ZSA9ICdwb2xpdGUnO1xuICByb2xlOiBUb2FzdFJvbGUgPSAnc3RhdHVzJztcbiAgcG9zaXRpb246IFRvYXN0UG9zaXRpb24gPSAndG9wLWNlbnRlcic7XG4gIGNsYXNzTmFtZTogc3RyaW5nO1xuICBjbG9zZVN0eWxlOiBhbnk7XG4gIGRpc21pc3NpYmxlOiBib29sZWFuO1xuICBhdXRvQ2xvc2UgPSB0cnVlO1xuICBkdXJhdGlvbjogbnVtYmVyO1xuICBpY29uOiBDb250ZW50O1xuICBpY29uVGhlbWU6IEljb25UaGVtZTtcbiAgc3R5bGU6IGFueTtcbiAgdGhlbWU6IFRvYXN0VGhlbWUgPSAndG9hc3QnO1xuXG4gIC8vIGtleSBpbiBUb2FzdFR5cGVcbiAgc3VjY2VzczogVG9hc3RPcHRpb25zICYgeyBjb250ZW50PzogQ29udGVudCB9ID0geyBjb250ZW50OiAnJyB9O1xuICBlcnJvcjogVG9hc3RPcHRpb25zICYgeyBjb250ZW50PzogQ29udGVudCB9ID0geyBjb250ZW50OiAnJyB9O1xuICBsb2FkaW5nOiBUb2FzdE9wdGlvbnMgJiB7IGNvbnRlbnQ/OiBDb250ZW50IH0gPSB7IGNvbnRlbnQ6ICcnIH07XG4gIGJsYW5rOiBUb2FzdE9wdGlvbnMgJiB7IGNvbnRlbnQ/OiBDb250ZW50IH0gPSB7IGNvbnRlbnQ6ICcnIH07XG4gIHdhcm5pbmc6IFRvYXN0T3B0aW9ucyAmIHsgY29udGVudD86IENvbnRlbnQgfSA9IHsgY29udGVudDogJycgfTtcbn1cblxuZXhwb3J0IHR5cGUgVG9hc3RUeXBlID0gJ3N1Y2Nlc3MnIHwgJ2Vycm9yJyB8ICdsb2FkaW5nJyB8ICdibGFuaycgfCAnd2FybmluZyc7XG5leHBvcnQgdHlwZSBUb2FzdFBvc2l0aW9uID0gJ3RvcC1sZWZ0JyB8ICd0b3AtY2VudGVyJyB8ICd0b3AtcmlnaHQnIHwgJ2JvdHRvbS1sZWZ0JyB8ICdib3R0b20tY2VudGVyJyB8ICdib3R0b20tcmlnaHQnO1xuXG5leHBvcnQgdHlwZSBJY29uVGhlbWUgPSB7XG4gIHByaW1hcnk6IHN0cmluZztcbiAgc2Vjb25kYXJ5Pzogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgVG9hc3RUaGVtZSA9ICd0b2FzdCcgfCAnc25hY2tiYXInO1xuXG5leHBvcnQgdHlwZSBWYWx1ZUZ1bmN0aW9uPFRWYWx1ZSwgVEFyZz4gPSAoYXJnOiBUQXJnKSA9PiBUVmFsdWU7XG5leHBvcnQgdHlwZSBWYWx1ZU9yRnVuY3Rpb248VFZhbHVlLCBUQXJnPiA9IFRWYWx1ZSB8IFZhbHVlRnVuY3Rpb248VFZhbHVlLCBUQXJnPjtcblxuY29uc3QgaXNGdW5jdGlvbiA9IDxUVmFsdWUsIFRBcmc+KFxuICB2YWxPckZ1bmN0aW9uOiBWYWx1ZU9yRnVuY3Rpb248VFZhbHVlLCBUQXJnPlxuKTogdmFsT3JGdW5jdGlvbiBpcyBWYWx1ZUZ1bmN0aW9uPFRWYWx1ZSwgVEFyZz4gPT4gdHlwZW9mIHZhbE9yRnVuY3Rpb24gPT09ICdmdW5jdGlvbic7XG5cbmV4cG9ydCBjb25zdCByZXNvbHZlVmFsdWVPckZ1bmN0aW9uID0gPFRWYWx1ZSwgVEFyZz4odmFsT3JGdW5jdGlvbjogVmFsdWVPckZ1bmN0aW9uPFRWYWx1ZSwgVEFyZz4sIGFyZzogVEFyZyk6IFRWYWx1ZSA9PlxuICBpc0Z1bmN0aW9uKHZhbE9yRnVuY3Rpb24pID8gdmFsT3JGdW5jdGlvbihhcmcpIDogdmFsT3JGdW5jdGlvbjtcblxuZXhwb3J0IHR5cGUgVG9hc3RSb2xlID0gJ3N0YXR1cycgfCAnYWxlcnQnO1xuXG5leHBvcnQgdHlwZSBUb2FzdEFyaWFMaXZlID0gJ2Fzc2VydGl2ZScgfCAnb2ZmJyB8ICdwb2xpdGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRvYXN0IHtcbiAgdHlwZTogVG9hc3RUeXBlO1xuXG4gIC8qKlxuICAgKiBVbmlxdWUgaWQgdG8gYXNzb2NpYXRlIHdpdGggaG90LXRvYXN0LlxuICAgKiBUaGVyZSBjYW4ndCBiZSBtdWx0aXBsZSBob3QtdG9hc3RzIG9wZW5lZCB3aXRoIHNhbWUgaWQuXG4gICAqXG4gICAqIEBkZWZhdWx0IERhdGUubm93KCkudG9TdHJpbmcoKVxuICAgKi9cbiAgaWQ6IHN0cmluZztcblxuICAvKiogVGhlIG1lc3NhZ2UgdG8gc2hvdyBpbiB0aGUgaG90LXRvYXN0LiAqL1xuICBtZXNzYWdlOiBDb250ZW50O1xuXG4gIC8qKlxuICAgKiBSb2xlIG9mIHRoZSBsaXZlIHJlZ2lvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgc3RhdHVzXG4gICAqL1xuICByb2xlOiBUb2FzdFJvbGU7XG5cbiAgLyoqIGFyaWEtbGl2ZSB2YWx1ZSBmb3IgdGhlIGxpdmUgcmVnaW9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCBwb2xpdGVcbiAgICovXG4gIGFyaWFMaXZlOiBUb2FzdEFyaWFMaXZlO1xuXG4gIC8qKkljb24gdG8gc2hvdyBpbiB0aGUgaG90LXRvYXN0ICovXG4gIGljb24/OiBDb250ZW50O1xuXG4gIC8qKlxuICAgKiBEdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMgYWZ0ZXIgd2hpY2ggaG90LXRvYXN0IHdpbGwgYmUgYXV0byBjbG9zZWQuXG4gICAqIENhbiBiZSBkaXNhYmxlZCB2aWEgYGF1dG9DbG9zZTogZmFsc2VgXG4gICAqXG4gICAqIEBkZWZhdWx0IDMwMDAgfCBlcnJvciA9IDQwMDAgfCBsb2FkaW5nID0gMzAwMDBcbiAgICovXG4gIGR1cmF0aW9uPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTaG93IGNsb3NlIGJ1dHRvbiBpbiBob3QtdG9hc3RcbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGRpc21pc3NpYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQXV0byBjbG9zZSBob3QtdG9hc3QgYWZ0ZXIgZHVyYXRpb25cbiAgICpcbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgYXV0b0Nsb3NlPzogYm9vbGVhbjtcblxuICAvKipFeHRyYSBzdHlsZXMgdG8gYXBwbHkgZm9yIGhvdC10b2FzdCAqL1xuICBzdHlsZT86IGFueTtcblxuICAvKipFeHRyYSBDU1MgY2xhc3NlcyB0byBiZSBhZGRlZCB0byB0aGUgaG90IHRvYXN0IGNvbnRhaW5lci4gKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlVzZSB0aGlzIHRvIGNoYW5nZSBpY29uIGNvbG9yICovXG4gIGljb25UaGVtZT86IEljb25UaGVtZTtcblxuICAvKipcbiAgICogVmlzdWFsIGFwcGVhcmFuY2Ugb2YgaG90LXRvYXN0XG4gICAqXG4gICAqIEBkZWZhdWx0IHRvYXN0XG4gICAqL1xuICB0aGVtZT86IFRvYXN0VGhlbWU7XG5cbiAgLyoqXG4gICAqIFRoZSBwb3NpdGlvbiB0byBwbGFjZSB0aGUgaG90LXRvYXN0LlxuICAgKlxuICAgKiAgQGRlZmF1bHQgdG9wLWNlbnRlclxuICAgKi9cbiAgcG9zaXRpb24/OiBUb2FzdFBvc2l0aW9uO1xuXG4gIC8qKkV4dHJhIHN0eWxlcyB0byBhcHBseSBmb3IgY2xvc2UgYnV0dG9uICovXG4gIGNsb3NlU3R5bGU/OiBhbnk7XG5cbiAgY3JlYXRlZEF0OiBudW1iZXI7XG4gIHZpc2libGU6IGJvb2xlYW47XG4gIGhlaWdodD86IG51bWJlcjtcblxuICBvYnNlcnZhYmxlTWVzc2FnZXM/OiBPYnNlcnZhYmxlTWVzc2FnZXM8dW5rbm93bj47XG5cbiAgLyoqXG4gICAqIFVzZWZ1bCB3aGVuIHlvdSB3YW50IHRvIGtlZXAgYSBwZXJzaXN0YW5jZSBmb3IgdG9hc3QgYmFzZWQgb24gaWRzLCBhY3Jvc3Mgc2Vzc2lvbnMuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIC8vIExldHMgc2F5IHlvdSB3YW50IHNob3cgaG90LXRvYXN0LCB3aXRoIGEgcGFydGljdWxhciBpZCxcbiAgICogLy8gbWF4IDMgdGltZXMgdG8gYSB1c2VyIGlycmVzcGVjdGl2ZSBvZiBicm93c2VyIHNlc3Npb24uXG4gICAqIC8vIEluIHRoaXMgY2FzZSB5b3Ugd2lsbCBzZXQgdGhpcyBhczpcbiAgICogeyBlbmFibGVkOiB0cnVlLCBjb3VudDogMyB9XG4gICAqXG4gICAqIEB0eXBlIHtUb2FzdFBlcnNpc3RDb25maWd9XG4gICAqL1xuICBwZXJzaXN0PzogVG9hc3RQZXJzaXN0Q29uZmlnO1xufVxuXG5leHBvcnQgdHlwZSBUb2FzdE9wdGlvbnMgPSBQYXJ0aWFsPFxuICBQaWNrPFxuICAgIFRvYXN0LFxuICAgIHwgJ2lkJ1xuICAgIHwgJ2ljb24nXG4gICAgfCAnZHVyYXRpb24nXG4gICAgfCAnZGlzbWlzc2libGUnXG4gICAgfCAnYXV0b0Nsb3NlJ1xuICAgIHwgJ3JvbGUnXG4gICAgfCAnYXJpYUxpdmUnXG4gICAgfCAnY2xhc3NOYW1lJ1xuICAgIHwgJ3N0eWxlJ1xuICAgIHwgJ2ljb25UaGVtZSdcbiAgICB8ICd0aGVtZSdcbiAgICB8ICdwb3NpdGlvbidcbiAgICB8ICdjbG9zZVN0eWxlJ1xuICAgIHwgJ3BlcnNpc3QnXG4gID5cbj47XG5cbmV4cG9ydCB0eXBlIERlZmF1bHRUb2FzdE9wdGlvbnMgPSBUb2FzdE9wdGlvbnMgJlxuICB7XG4gICAgW2tleSBpbiBUb2FzdFR5cGVdPzogVG9hc3RPcHRpb25zICYgeyBjb250ZW50PzogQ29udGVudCB9O1xuICB9O1xuXG5leHBvcnQgdHlwZSBPYnNlcnZhYmxlTG9hZGluZyA9IHtcbiAgY29udGVudDogQ29udGVudDtcbn0gJiBUb2FzdE9wdGlvbnM7XG5cbmV4cG9ydCB0eXBlIE9ic2VydmFibGVTdWNjZXNzT3JFcnJvcjxUPiA9IHtcbiAgY29udGVudDogVmFsdWVPckZ1bmN0aW9uPENvbnRlbnQsIFQ+O1xufSAmIFRvYXN0T3B0aW9ucztcblxuZXhwb3J0IHR5cGUgT2JzZXJ2YWJsZU1lc3NhZ2VzPFQ+ID0ge1xuICBsb2FkaW5nPzogQ29udGVudCB8IE9ic2VydmFibGVMb2FkaW5nO1xuICBzdWNjZXNzOiBWYWx1ZU9yRnVuY3Rpb248Q29udGVudCwgVD4gfCBPYnNlcnZhYmxlU3VjY2Vzc09yRXJyb3I8VD47XG4gIGVycm9yPzogVmFsdWVPckZ1bmN0aW9uPENvbnRlbnQsIGFueT4gfCBPYnNlcnZhYmxlU3VjY2Vzc09yRXJyb3I8YW55Pjtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSG90VG9hc3RTZXJ2aWNlTWV0aG9kcyB7XG4gIHNob3cobWVzc2FnZT86IENvbnRlbnQsIG9wdGlvbnM/OiBUb2FzdE9wdGlvbnMpOiBDcmVhdGVIb3RUb2FzdFJlZjtcbiAgZXJyb3IobWVzc2FnZT86IENvbnRlbnQsIG9wdGlvbnM/OiBUb2FzdE9wdGlvbnMpOiBDcmVhdGVIb3RUb2FzdFJlZjtcbiAgc3VjY2VzcyhtZXNzYWdlPzogQ29udGVudCwgb3B0aW9ucz86IFRvYXN0T3B0aW9ucyk6IENyZWF0ZUhvdFRvYXN0UmVmO1xuICBsb2FkaW5nKG1lc3NhZ2U/OiBDb250ZW50LCBvcHRpb25zPzogVG9hc3RPcHRpb25zKTogQ3JlYXRlSG90VG9hc3RSZWY7XG4gIHdhcm5pbmcobWVzc2FnZT86IENvbnRlbnQsIG9wdGlvbnM/OiBUb2FzdE9wdGlvbnMpOiBDcmVhdGVIb3RUb2FzdFJlZjtcbiAgb2JzZXJ2ZTxUPihtZXNzYWdlczogT2JzZXJ2YWJsZU1lc3NhZ2VzPFQ+KTogKHNvdXJjZTogT2JzZXJ2YWJsZTxUPikgPT4gT2JzZXJ2YWJsZTxUPjtcbiAgY2xvc2UoaWQ6IHN0cmluZyk6IHZvaWQ7XG59XG5cbmV4cG9ydCB0eXBlIFVwZGF0ZVRvYXN0T3B0aW9ucyA9IFBhcnRpYWw8XG4gIFBpY2s8XG4gICAgVG9hc3QsXG4gICAgJ2ljb24nIHwgJ2R1cmF0aW9uJyB8ICdkaXNtaXNzaWJsZScgfCAnY2xhc3NOYW1lJyB8ICdzdHlsZScgfCAnaWNvblRoZW1lJyB8ICd0eXBlJyB8ICd0aGVtZScgfCAnY2xvc2VTdHlsZSdcbiAgPlxuPjtcblxuZXhwb3J0IGludGVyZmFjZSBIb3RUb2FzdFJlZlByb3BzIHtcbiAgLyoqIFJldHVybnMgYWxsIHRoZSB0b2FzdCBvcHRpb25zICovXG4gIGdldFRvYXN0OiAoKSA9PiBUb2FzdDtcbiAgZGlzcG9zZTogKCkgPT4gdm9pZDtcbiAgLyoqVXBkYXRlcyBvbmx5IG1lc3NhZ2UgKi9cbiAgdXBkYXRlTWVzc2FnZTogKG1lc3NhZ2U6IENvbnRlbnQpID0+IHZvaWQ7XG4gIC8qKlVwZGF0ZSB1cGRhdGFibGUgb3B0aW9ucyBvZiB0b2FzdCAqL1xuICB1cGRhdGVUb2FzdDogKG9wdGlvbnM6IFVwZGF0ZVRvYXN0T3B0aW9ucykgPT4gdm9pZDtcbiAgLyoqIE9ic2VydmFibGUgZm9yIG5vdGlmeWluZyB0aGUgdXNlciB0aGF0IHRoZSB0b2FzdCBoYXMgYmVlbiBjbG9zZWQuICovXG4gIGFmdGVyQ2xvc2VkOiBPYnNlcnZhYmxlPEhvdFRvYXN0Q2xvc2U+O1xuICAvKipDbG9zZXMgdGhlIHRvYXN0ICovXG4gIGNsb3NlOiAoY2xvc2VEYXRhPzogeyBkaXNtaXNzZWRCeUFjdGlvbjogYm9vbGVhbiB9KSA9PiB2b2lkO1xufVxuXG4vKiogRXZlbnQgdGhhdCBpcyBlbWl0dGVkIHdoZW4gYSBzbmFjayBiYXIgaXMgZGlzbWlzc2VkLiAqL1xuZXhwb3J0IGludGVyZmFjZSBIb3RUb2FzdENsb3NlIHtcbiAgLyoqIFdoZXRoZXIgdGhlIHNuYWNrIGJhciB3YXMgZGlzbWlzc2VkIHVzaW5nIHRoZSBhY3Rpb24gYnV0dG9uLiAqL1xuICBkaXNtaXNzZWRCeUFjdGlvbjogYm9vbGVhbjtcbiAgaWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFRvYXN0UGVyc2lzdENvbmZpZyB7XG4gIC8qKlxuICAgKkluIHdoaWNoIHN0b3JhZ2UgaWQgdnMuIGNvdW50cyBzaG91bGQgYmUgc3RvcmVkXG4gICAqXG4gICAqIEB0eXBlIHsoJ2xvY2FsJyB8ICdzZXNzaW9uJyl9XG4gICAqIEBtZW1iZXJvZiBUb2FzdFBlcnNpc3RDb25maWdcbiAgICogQGRlZmF1bHQgJ2xvY2FsJ1xuICAgKi9cbiAgc3RvcmFnZT86ICdsb2NhbCcgfCAnc2Vzc2lvbicgPSAnbG9jYWwnO1xuXG4gIC8qKlxuICAgKlRoZSBrZXkgcGF0dGVybiB0byBzdG9yZSBvYmplY3QgaW4gc3RvcmFnZS4gYCR7aWR9YCBpbiBwYXR0ZXJuIGlzIHJlcGxhY2VkIHdpdGggYWN0dWFsIHRvYXN0IGlkLlxuICAgKlxuICAgKiBAdHlwZSB7KCdsb2NhbCcgfCAnc2Vzc2lvbicpfVxuICAgKiBAbWVtYmVyb2YgVG9hc3RQZXJzaXN0Q29uZmlnXG4gICAqIEBkZWZhdWx0ICduZ25lYXQvaG90dG9hc3QtJHtpZH0nXG4gICAqL1xuICBrZXk/OiBzdHJpbmcgPSAnbmduZWF0L2hvdG90YXN0LSR7aWR9JztcblxuICAvKipcbiAgICpUaGUgbnVtYmVyIG9mIHRvYXN0cyBhbGxvd2VkIHRvIHNob3cuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBUb2FzdFBlcnNpc3RDb25maWdcbiAgICogQGRlZmF1bHQgMVxuICAgKi9cbiAgY291bnQ/ID0gMTtcblxuICBlbmFibGVkID0gZmFsc2U7XG59XG5cbmV4cG9ydCB0eXBlIEFkZFRvYXN0UmVmID0gT21pdDxPbWl0PEhvdFRvYXN0UmVmUHJvcHMsICdjbG9zZSc+LCAnZ2V0VG9hc3QnPjtcblxuZXhwb3J0IHR5cGUgQ3JlYXRlSG90VG9hc3RSZWYgPSBPbWl0PE9taXQ8SG90VG9hc3RSZWZQcm9wcywgJ2FwcGVuZFRvJz4sICdkaXNwb3NlJz47XG4iXX0=