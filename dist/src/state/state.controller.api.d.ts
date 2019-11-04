import { StateService } from './state.service';
export declare class StateControllerApi {
    private readonly stateService;
    constructor(stateService: StateService);
    handleCreateReq(body: {
        content: string;
    }): Promise<{
        code: number;
        message: string;
        data: import("./entity/state.entity").State;
    }>;
    deleteState(body: {
        id: number;
    }): Promise<{
        code: number;
        message: string;
        data: any;
    }>;
    findState(body: {
        time: string;
    }): Promise<{
        code: number;
        message: string;
        data: any;
    }>;
}
